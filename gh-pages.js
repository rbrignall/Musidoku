var ghpages = require('gh-pages');

ghpages.publish(
    'dist', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/rbrignall/Musidoku.git', // Update to point to your repository  
        user: {
            name: 'rbrignall', // update to use your name
            email: 'rbrignall@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)