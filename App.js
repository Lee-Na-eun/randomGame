import * as readline from 'readline-sync';

function main() {
  console.log('홀,짝 중 고르세요');
  const input = readline.question();

  if (input === '홀' || input === '짝') {
    if (input === random()) {
      console.log('정답입니다!');
    } else {
      console.log('틀렸습니다...');
    }
  } else {
    console.log('홀,짝 중에 하나를 골라주세요');
  }
}

function random() {
  // indexOf를 랜덤화 시켜서 배열 중 하나를 고르게 시키면 어떨까
  //   return arr[Math.floor(Math.random() * arr.length)];
  // 홀 짝 중에 하나가 랜덤하게 나오는데 그 이유를 아직 잘 모르겠음(보류)
  let oneTwo = Math.floor(Math.random() * 2); // 계속해서 랜덤한 숫자 1,2중에서 나옴
  const arr = ['홀', '짝'];
  return arr[oneTwo]; // 홀짝으로 랜덤하게 나옴
}

main();
