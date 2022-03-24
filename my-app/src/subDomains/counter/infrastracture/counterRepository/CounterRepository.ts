// A mock function to mimic making an async request for data
export function fetchAmountAsync(amount = 3) {
  return new Promise<{ amount: number }>((resolve, _reject) => 
    setTimeout(() => resolve({amount: amount}), 2000)
  );
}