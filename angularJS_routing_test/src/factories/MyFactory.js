function MyFactory() {
  function getMessage() {
    return 'Hello Angular!';
  }

  return {
    getMessage,
  };
}

export default MyFactory;
