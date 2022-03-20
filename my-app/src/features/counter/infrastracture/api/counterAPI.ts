// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve, reject) => 
    setTimeout(() => reject('or nah'), 1000)
  );
}
