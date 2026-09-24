---
name: ship
description: "Repo shipping workflow that must be used before editing tracked files in this repository. Use for any coding, config, docs, dependency, generated artifact, or other project-file edit; start from a freshly updated dev, work on a claude task branch, commit each logical change group, then merge back into dev and push. Never touch main. Skip only for read-only turns or edits outside this repo."
---

# Ship

Use this workflow for every turn that edits tracked files in this repo.

Branch ladder:

```text
main <- dev <- claude/<type>-<slug>
```

`dev` is the default working branch. Feature, fix, refactor, and other task
branches start from a freshly updated `dev` and merge back into `dev`.

This is a client repo, so the ladder has three rungs and only three. **There is
no `preview` branch here.** If one ever shows up in a client repo, it is
surplus. The agency monorepo does have `preview`; those are different repos with
different cycles.

**`main` is never reached from here.** The `dev` -> `main` merge is done by
Martí, by hand, through a GitHub PR (or through the `release` skill when he asks
for a release). Do not commit to `main`, do not merge into `main`, do not push
`main` — not even after asking.

## When To Run

Run when the turn edits any tracked project file, including code, tests,
configs, docs, lockfiles, generated project files, or `.claude/` files.

Skip when the turn only reads, answers, explores, runs diagnostics, or edits
files outside this repo.

If uncommitted changes exist at turn start that you did not make, stop and ask
the user. Do not stash, discard, amend, reset, or overwrite user work without
explicit permission. Unrelated dirty paths are common in this repo: leave them
alone and stage only the paths you touched.

## Phase A: Branch And Commit

### 1. Preflight

```bash
git status --porcelain
git rev-parse --abbrev-ref HEAD
git fetch origin --prune
```

If you are continuing the same unfinished task on an existing unmerged
`claude/` branch, keep using that branch and add normal commits.

For a new task, update `dev` first:

```bash
git checkout dev
git pull --ff-only origin dev
```

### 2. Choose A Type

Use the primary intent of the task:

| Commit type | Branch type | Use for |
| --- | --- | --- |
| `feat` | `feature` | New user-facing behavior, pages, APIs, capabilities |
| `fix` | `fix` | Bug fixes |
| `refactor` | `refactor` | Restructure without behavior change |
| `perf` | `perf` | Performance improvements |
| `test` | `test` | Test-only changes |
| `docs` | `docs` | Documentation-only changes |
| `style` | `style` | Formatting-only changes |
| `build` | `build` | Build system, dependencies, package tooling |
| `ci` | `ci` | CI and deployment config |
| `chore` | `chore` | Maintenance, repo process, non-product tooling |
| `revert` | `revert` | Reverts |

Commit messages use the conventional commit type in the first column. Branch
names use the branch type in the second column.

### 3. Create The Branch

For a new task branch:

```bash
BRANCH="claude/<branch-type>-<short-kebab-slug>"
git ls-remote --exit-code --heads origin "$BRANCH" >/dev/null 2>&1 \
  && BRANCH="${BRANCH}-$(date +%H%M)"
git checkout -b "$BRANCH"
```

Slug rules:

- Use 2-5 kebab-case words.
- Prefer specific nouns and verbs.
- Keep the full branch name readable.
- Examples: `claude/feature-booking-selector`, `claude/fix-login-redirect`,
  `claude/refactor-flat-media`.

### 4. Edit And Verify

Make the requested changes. Keep unrelated refactors out of the branch.

Run the smallest meaningful verification for the files touched:

| Check | Command |
| --- | --- |
| Types | `npm run typecheck` |
| Lint | `npm run lint` |
| Build | `NEXT_PUBLIC_SITE_URL=https://example.invalid npx next build` (when routes, config or data shapes change) |

Typecheck and lint are the default pair. The build is cheap here (no database)
but slow; run it when the change could break prerendering (a new route, a
dictionary shape, `proxy.ts`, `next.config.ts`).

**Never start a dev server.** Martí runs `npm run dev` himself, from his own
terminal, including anything already holding a port. Use only commands that
terminate on their own. If something has to be seen in a browser, ask him — do
not open one, and do not claim how a change looks live.

### 5. Commit Logical Groups

Commit every feature, step, or coherent change group separately. A turn may
produce several commits when the work splits naturally into setup,
implementation, tests, docs, or follow-up fixes.

Stage explicit paths only:

```bash
git add <paths>
git commit -m "<type>: <summary in the imperative>"
```

**Commit subjects are written in English**, in the imperative, with the
conventional type and an optional scope:

```text
feat: add the services index
fix: correct the 308 for /de/leistungen
feat(contact): timing trap on the form
```

Rules:

- Do not use `git add .` or `git add -A`.
- Do not use `--amend` unless the user explicitly asks.
- Keep subjects 72 characters or less.
- Use the same conventional type selected for the branch.
- End the message with the co-author trailer the session provides, when there
  is one.
- If hooks or checks fail, fix the issue and create another normal commit.

## Phase B: Merge Into Dev

Phase B runs **automatically**, as soon as Phase A is finished and verification
passes. Do not stop to ask, and do not open a pull request: in this repo,
merging into `dev` and pushing is the normal end of an editing turn.

### 1. Freshen Dev

```bash
git fetch origin --prune
git checkout dev
git pull --ff-only origin dev
```

If `dev` moved while you worked, rebase the branch onto it before merging:

```bash
git checkout "$BRANCH"
git rebase origin/dev
```

If the rebase conflicts and the resolution is not obvious, stop and explain the
conflict instead of forcing through it.

### 2. Merge With A Merge Commit

Always `--no-ff`, so the branch stays visible in the history:

```bash
git checkout dev
git merge --no-ff "$BRANCH" -m "merge: <summary>"
```

### 3. Push And Clean Up

```bash
git push origin dev
git branch -d "$BRANCH"
```

The task branch is not pushed to `origin`. Only `dev` and `main` live there.

### 4. Report

- Commit subjects created this turn.
- The merge subject.
- Verification run and its result.
- A short diff summary.

## Failure Handling

If the merge or the push fails, leave the current state intact. Report the step
that failed and the exact command the user can run by hand.

Never resolve a failure by touching `main`, and never force-push `dev`.
