// A mock function to mimic making an async request for data
export function fetchAmountAsync(amount = 3) {
  return new Promise<{ amount: number }>((resolve, reject) => 
    setTimeout(() => resolve({amount: amount}), 2000)
  );
}