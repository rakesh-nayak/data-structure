import Queue from './index';

const distribute = (queues, nums, digit) => {
  nums.map(num => {
    if(digit === 1) {
      queues[num % 10].enqueue(num);
    }
    else if( digit === 10) {
      queues[Math.floor(num / 10)].enqueue(num);
    }
  });
};

const collect = (queues) => {
  const nums = [];
  queues.map(queue => {
    while(!queue.isEmpty()) {
      nums.push(queue.dequeue())
    }
  });
  return nums;
};

const queues = [];

for(let i = 0; i < 10; i++) {
  queues.push(new Queue());
}

let nums = [23,13,58,11,21,98,18];

console.log('Before Radix sort: ');
console.log(nums);
distribute(queues, nums, 1);
nums = collect(queues);
// console.log(nums);
distribute(queues, nums, 10);
nums = collect(queues);

console.log('After Radix sort: ');
console.log(nums);
