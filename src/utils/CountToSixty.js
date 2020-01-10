function* CountToSixty() {
  const time = 0;
  while (time < 60) {
    yield time + 1;
  }
}

export default CountToSixty;
