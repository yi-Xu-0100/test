const { getOctokit } = require('@actions/github');

async function run() {
  // This should be a token with access to your repository scoped in as a secret.
  // The YML workflow will need to set myToken with the GitHub Secret Token
  // myToken: ${{ secrets.GITHUB_TOKEN }}
  // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret

  const github = getOctokit(process.env.REPO_TOKEN);

  // You can also pass in additional options as a second parameter to getOctokit
  // const octokit = github.getOctokit(myToken, {userAgent: "MyActionVersion1"});

  const { data } = await github.pulls.create({
    owner: 'yi-Xu-0100',
    repo: 'test',
    head: 'prepare-release',
    base: 'main',
    title: 'chore(release): :bookmark: release v1.1.1',
    body: 'test',
    maintainer_can_modify: true
  });

  console.log(data);
}

run();
