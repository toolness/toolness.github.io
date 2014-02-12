var SETTINGS = {
  username: 'toolness',
  excludes: [
    'openmasterpiece',
    'bug-616472-extension',
    'jetpack-e10s',
    'magic-ink',
    'my-code-reviews',
    'misc',
    'hackasaurus-lib',
    'oop-jetpack-sdk-poc'
  ],
  forks: [
    'collusion',
    'slowparse'
  ],
  extras: [
    {
      name: 'python-for-js-programmers',
      html_url: 'http://hg.toolness.com/python-for-js-programmers/',
      blogpost_url: 'http://www.toolness.com/wp/2008/06/python-for-javascript-programmers/',
      homepage: 'http://hg.toolness.com/python-for-js-programmers/raw-file/20cd2cf47710/PythonForJsProgrammers.html',
      pushed_at: 'Wed Jun 11 06:13:00 2008 -0700',
      description: 'A Python tutorial for JavaScript programmers.'
    },
    {
      name: '826-national-preso',
      html_url: 'http://hg.toolness.com/826-national-preso/',
      blogpost_url: 'http://www.toolness.com/wp/2010/10/what-mozilla-can-learn-from-826-national/',
      homepage: 'http://hg.toolness.com/826-national-preso/raw-file/a35b922da615/index.html',
      pushed_at: 'Thu Jul 08 10:20:54 2010 -0700',
      description: 'A presentation on what Mozilla can learn from 826 National.'
    },
    {
      name: 'browser-couch',
      html_url: 'http://hg.toolness.com/browser-couch/',
      blogpost_url: 'http://www.toolness.com/wp/2009/04/couches-in-browsers/',
      homepage: 'http://hg.toolness.com/browser-couch/raw-file/954b2b739d41/index.html',
      pushed_at: 'Tue Apr 21 12:13:21 2009 -0700',
      description: 'Naive attempt at client-side CouchDB in the browser using DOMStorage.'
    },
    {
      name: 'parchment',
      html_url: 'https://code.google.com/p/parchment/',
      blogpost_url: 'http://www.toolness.com/wp/2008/06/introducing-parchment/',
      homepage: 'http://parchment.toolness.com/',
      pushed_at: 'June 2008',
      description: 'A web-based interactive fiction interpreter with beautiful typography.'
    },
    {
      name: 'processmanager',
      html_url: 'http://hg.toolness.com/processmanager/',
      pushed_at: 'Sun Sep 02 04:40:21 2012 +0000',
      description: 'A simple Python-based solution for managing any process or collection of processes that provide services for an indefinite period of time (e.g., a server or daemon) on a Unix-based OS.'
    },
    {
      name: 'open-web-challenges',
      blogpost_url: 'http://www.toolness.com/wp/2009/04/design-challenge-tutorials/',
      html_url: 'http://hg.toolness.com/open-web-challenges/',
      homepage: 'http://hg.toolness.com/open-web-challenges/raw-file/923fcc0ad519/index.html',
      pushed_at: 'Tue Mar 31 10:51:03 2009 -0700',
      description: 'Puzzle-based tutorials for learning Open Web technologies.'
    },
    {
      name: 'ff-herdict-preso',
      homepage: 'http://hg.toolness.com/ff-herdict-preso/raw-file/1e2d6fdd2bf2/ff-herdict-preso.html',
      blogpost_url: 'http://www.toolness.com/wp/2010/02/herdict-firefox-integration-and-better-html-presentations/',
      html_url: 'http://hg.toolness.com/ff-herdict-preso/',
      pushed_at: 'Wed Feb 10 16:35:00 2010 -0800',
      description: 'A short pitch for integrating Firefox with the Berkman Center\'s Herdict project.'
    },
    {
      name: 'pydermonkey',
      html_url: 'https://code.google.com/p/pydermonkey/',
      homepage: 'http://pydermonkey.googlecode.com/hg/docs/rendered/index.html',
      blogpost_url: 'http://www.toolness.com/wp/2009/09/coming-at-you-like-a-pydermonkey/',
      pushed_at: 'September 2009',
      description: 'A Python C extension module to expose the Mozilla SpiderMonkey engine to Python.'
    },
    {
      name: 'js-missions',
      homepage: 'http://labs.toolness.com/temp/js-missions/',
      pushed_at: 'August 2011',
      description: 'An attempt at teaching JavaScript with a nervous-system metaphor.'
    },
    {
      name: 'newbug',
      homepage: 'http://newbug.toolness.org/',
      pushed_at: 'June 2012',
      description: 'A very simple autocompletion-based interface for creating bugs in Bugzilla.'
    },
    {
      name: 'webmaking-for-knitters',
      homepage: 'http://labs.toolness.com/temp/webmaking-for-knitters/',
      blogpost_url: 'http://www.toolness.com/wp/2012/03/prototyping-presentations/',
      pushed_at: 'January 2012',
      description: 'A presentation answering Mark Surman\'s question, "what sort of web makers do you most want us to work with next year?"'
    },
    {
      name: 'webmakerx-spike',
      homepage: 'http://webmakerx.toolness.org/',
      html_url: 'https://github.com/toolness/friendlycode/tree/webmaker-x',
      blogpost_url: 'http://brettgaylor.tumblr.com/post/41197618281/webmaker-2013-roadmap-0-1',
      pushed_at: 'January 2013',
      description: 'An experimental mashup of Thimble and Popcorn Maker via Instapoppin\'s markup API.'
    },
    {
      name: 'thimble-dzslides-spike',
      homepage: 'http://labs.toolness.com/temp/thimble-dzslides-spike/?notypekit=1',
      html_url: 'https://github.com/toolness/friendlycode/tree/dzslides-spike',
      blogpost_url: 'http://www.toolness.com/wp/2013/01/building-bridges-between-guis-and-code-with-markup-apis/',
      pushed_at: 'July 2012',
      description: 'An experimental fork of Thimble allowing for easy creation of slideshows via Paul Rouget\'s DZSlides and a markup API.'
    },
    {
      name: 'thimble-physics-spike',
      homepage: 'http://labs.toolness.com/temp/thimble-dzslides-spike/?notypekit=1#static:physics',
      html_url: 'https://github.com/toolness/friendlycode/tree/dzslides-spike',
      blogpost_url: 'http://www.toolness.com/wp/2013/01/building-bridges-between-guis-and-code-with-markup-apis/',
      pushed_at: 'July 2012',
      description: 'An experimental fork of Thimble allowing for easy creation of physics simulations via Box2D and a markup API.'
    },
    {
      name: 'code-illuminated',
      html_url: 'https://code.google.com/p/code-illuminated/',
      blogpost_url: 'http://www.toolness.com/wp/2009/01/beautifully-documented-code/',
      pushed_at: 'January 2009',
      description: 'A tool for the automatic generation of documentation for source code, with an emphasis on typography, readability, and ease of use.'
    },
    {
      name: 'ambient-news',
      homepage: 'http://vimeo.com/1601371',
      html_url: 'http://hg.toolness.com/ambnews-firefox/',
      blogpost_url: 'http://www.toolness.com/wp/2008/08/ambient-news/',
      pushed_at: 'September 2008',
      description: 'A zero-configuration Firefox extension to get news about your favorite sites without subscribing to anything.'
    },
    {
      name: 'about-mozilla-redesign',
      homepage: 'http://hg.toolness.com/about-mozilla-redesign/raw-file/061eee7cffe6/about-mozilla.html',
      html_url: 'http://hg.toolness.com/about-mozilla-redesign/',
      blogpost_url: 'http://www.toolness.com/wp/2009/03/an-experiment-in-redesigning-aboutmozilla/',
      pushed_at: 'March 2009',
      description: 'An attempt to redesign the about:mozilla newsletter, inspired in part by the Swiss Grid System.'
    },
    {
      name: 'planet-ubiquity-redesign',
      homepage: 'http://hg.toolness.com/planet-ubiquity-redesign/raw-file/2009-03-03-blog-post/docs.html',
      html_url: 'http://hg.toolness.com/planet-ubiquity-redesign/',
      blogpost_url: 'http://www.toolness.com/wp/2009/03/redesigning-planets-and-project-dashboards/',
      pushed_at: 'March 2009',
      description: 'An experimental redesign for Planet Ubiquity, applicable to any project dashboard.'
    },
    {
      name: 'hivetron-prototype',
      homepage: 'http://jsbin.com/utawEke/1',
      html_url: 'http://jsbin.com/utawEke/1/edit',
      pushed_at: 'November 2013',
      description: 'A simple webpage atop a spreadsheet making it easy for Hive members to find each other based on their areas of expertise.'
    }
  ],
  extensions: {
    'memory-profiler': {
      blogpost_url: 'http://www.toolness.com/wp/2009/10/web-application-memory-profiling-take-two/'
    },
    'pakreport-jetpack': {
      blogpost_url: 'http://www.toolness.com/wp/2010/08/my-first-crisiscamp/'
    },
    'pkfloods': {
      blogpost_url: 'http://www.toolness.com/wp/2010/08/my-first-crisiscamp/'
    },
    'url-demystifier': {
      blogpost_url: 'http://www.toolness.com/wp/2011/08/the-decline-and-fall-of-the-url/'
    },
    'twitblob': {
      blogpost_url: 'http://www.toolness.com/wp/2010/09/twitblob/'
    },
    'reviewer-dashboard': {
      blogpost_url: 'http://www.toolness.com/wp/2010/10/reviewer-dashboards/'
    },
    'htmlpad': {
      blogpost_url: 'http://www.toolness.com/wp/2010/10/prelude-to-barcelona/'
    },
    'webxray': {
      blogpost_url: 'http://www.toolness.com/wp/2011/03/enter-the-hackasaurus/'
    },
    'all-my-etherpads': {
      blogpost_url: 'http://www.toolness.com/wp/2011/06/the-challenges-of-developing-offline-web-apps/'
    },
    'hackasaurus-parable': {
      blogpost_url: 'http://www.toolness.com/wp/2011/08/hacking-the-web-with-interactive-stories/'
    },
    'webmaking-tutorial-prototype': {
      blogpost_url: 'http://www.toolness.com/wp/2012/03/webmaker-tutorial-prototyping/'
    },
    'storything': {
      blogpost_url: 'http://www.toolness.com/wp/2012/03/storything-interactive-prototype/'
    },
    'quickpreso': {
      blogpost_url: 'http://www.toolness.com/wp/2012/03/prototyping-presentations/'
    },
    'slowparse': {
      blogpost_url: 'http://www.toolness.com/wp/2012/04/learning-and-grammatical-forgiveness/'
    },
    'collusion': {
      homepage: 'http://collusion.toolness.org/',
      blogpost_url: 'http://www.toolness.com/wp/2011/07/collusion/',
      pushed_at: 'July 2011'
    },
    'badge-microformat-fun': {
      blogpost_url: 'http://www.toolness.com/wp/2013/07/a-html-microformat-for-open-badges/'
    },
    'bugzilla-dashboard': {
      blogpost_url: 'http://www.toolness.com/wp/2010/08/a-dashboard-for-bugs/'
    }
  }
};
