const views = await octokit.repos.getViews({
    owner: context.repo.owner,
    repo: context.repo.repo,
});
console.log('### views begin ###');
console.log(views);
console.log('### views end ###');
console.log('type of views' + typeof (views));

const TopReferrers = await octokit.repos.getTopReferrers({
    owner: context.repo.owner,
    repo: context.repo.repo,
});
console.log('### TopReferrers begin ###');
console.log(views);
console.log('### TopReferrers end ###');
console.log('type of TopReferrers' + typeof (TopReferrers));

getClones