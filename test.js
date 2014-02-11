function test_parseDate() {
  var now = new Date();

  expect(now).to.equal(now);
  expect(parseDate("2011-01-26T19:06:43Z").getFullYear()).to.equal(2011);
  expect(parseDate("August 2010").getFullYear()).to.equal(2010);
  expect(parseDate("mar 2011").getMonth()).to.equal(2);
  expect(parseDate("Wed Jun 11 06:13:00 2008 -0700").getFullYear())
    .to.equal(2008);
  expect(parseDate("Thu, 01 Jan 1970 00:00:00").getFullYear())
    .to.equal(1970);
}

function test_parseLink() {
  var link = '<https://api.github.com/user/124687/repos?page=2>; ' +
             'rel="next", <https://api.github.com/user/124687/' +
             'repos?page=7>; rel="last"';
  expect(parseLink(link)).to.eql({
    next: 'https://api.github.com/user/124687/repos?page=2',
    last: 'https://api.github.com/user/124687/repos?page=7'
  });
}

function test_parseAndFormatDate() {
  expect(parseAndFormatDate("Aug 2010")).to.equal("August 2010");
}
