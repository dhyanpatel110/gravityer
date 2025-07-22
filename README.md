## 📘 Question 1: DSA Given an array of integers, return the length of the longest increasing subsequence. A subsequence is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. For example, given the array [10, 9, 2, 5, 3, 7, 101, 18], the longest increasing subsequence is [2, 3, 7, 101], and its length is 4.
---
- **Time Complexity:** O(n log n)  
- **Space Complexity:** O(n)

---

## 💡 JavaScript Solution

```js
function lengthOfLIS(nums) {
  const dp = [];

  for (let num of nums) {
    let left = 0, right = dp.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (dp[mid] < num) left = mid + 1;
      else right = mid;
    }

    dp[left] = num;
  }

  return dp.length;
}

// Sample test case
const input = [10, 9, 2, 5, 3, 7, 101, 18];
const result = lengthOfLIS(input);
console.log("Input:", input);
console.log("Output:", result);
```

## Project setup

### Clone this repo

```
git clone https://github.com/dhyanpatel110/pokemon.git
```

### Install dependencies

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
