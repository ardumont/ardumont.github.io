/*!
 * disqus.js retrieve from their site and slightly adapted for better readability.
 */

// site name, do not change this variable name
var disqus_shortname = 'tonyx-blog';

var disqusRetrieveComments = function() {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
};

var disqusRetrieveCountComments = function() {
    var s = document.createElement('script');
    s.async = true;
    s.type = 'text/javascript';
    s.src = '//' + disqus_shortname + '.disqus.com/count.js';
    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
};
