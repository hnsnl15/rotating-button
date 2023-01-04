let nums = [1, 2, 3, 6, 9, 8, 7, 4];
let ids = [1, 2, 3, 6, 9, 8, 7, 4];

const btn5 = document.getElementById("btn5");

btn5.onclick = function () {
  nums.unshift(nums.pop());
  for (let i = 1; i < ids.length; i++) {
    document.getElementById(`btn${i}`).innerHTML = nums[i];
  }
};
