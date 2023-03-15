function or(a, b) {
    return a || b;
  }
  
  function and(a, b) {
    return a && b;
  }
  
  module.exports = {
    or,
    and,
  };