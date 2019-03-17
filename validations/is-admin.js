const isAdmin = id => {
  const admin = "5be9e130f19c3e735e344234";
  return id.id === admin;
};

module.exports = isAdmin;
