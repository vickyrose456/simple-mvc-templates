// There is no reason for the name here except as an
// example of how to set something for the POST
let name = 'unknown';

const hostIndex = (req, res) => {
  //in the past -> res.sendFile()
  //we have to take template and render it to be able to displayed
  //the index.handler code will make the title the passed in title value
  res.render('index', {
      title: 'Home',
      pageName: 'Home Page',
      userName: name,
  });
};//end hostIndex

const hostPage1 = (req, res) => {
  res.render('page1', {
    title: 'Page 1',
});
};

const hostPage2 = (req, res) => {
  //this doesnt have any variables
  res.render('page2');
};

const getName = (req, res) => {
  res.json({name});
};

const setName = (req, res) => {
  if (!req.body.firstname || !req.body.lastname) {
    
    return res.status(400).json({ error: 'firstname and lastname are both required' });
  }
    
  // if required fields are good, then set name
  name = `${req.body.firstname} ${req.body.lastname}`;

  return res.json({ name });
};

const notFound = (req, res) => {
  res.status(404).render('notFound', {
    page: req.url,
  });
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
