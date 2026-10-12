<!-- managed:linked-repos -->
## Linked Repositories
- dc-commissionstack/Kristal-Black
<!-- /managed:linked-repos -->

# Direct Stage — Code Workflow

## Branch Strategy
- `main` — production-ready code
- Feature branches for changes (e.g., `kristal-black-customization`)

## Process
1. Work is done in feature branches
2. Open a pull request to `main` when ready
3. Lead reviews and merges via `gh pr merge`

## Deployment
- Deployed via Vercel (connected to GitHub repo)
- `main` branch auto-deploys
