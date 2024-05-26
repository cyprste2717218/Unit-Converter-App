# Get the current branch name
$currentBranch = git rev-parse --abbrev-ref HEAD

# Define your desired branch name pattern (adjust as needed)
$validBranchRegex = "^(fix|feat)\/[a-zA-Z0-9\-_]+$"

# Check if the branch name matches the pattern
if (!($currentBranch -match $validBranchRegex)) {
  Write-Error "Error: Your branch name does not follow the convention. Branch name must adhere to this format: $validBranchRegex"
  Write-Error "Please rename your branch to a valid name and try again."
  Exit-Code 1  # Exit with an error code to halt commit
}

# Script continues if branch name is valid
Write-Host "Branch name seems valid: $currentBranch"
