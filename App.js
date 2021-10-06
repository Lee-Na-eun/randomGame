import * as readline from 'readline-sync';

function main() {
  while (true) {
    console.log('홀,짝 중 고르세요');
    const input = readline.question();

    if (input === '홀' || input === '짝') {
      if (input === random()) {
        console.log('딩동댕!! 정답입니다!');
        break;
      } else {
        console.log('땡!! 틀렸습니다!');
        break;
      }
    } else {
      console.log('정확하게 입력해주세요. 홀, 짝 중 선택해야 합니다!');
      console.log();
    }
  }
}

function random() {
  // 배열의 순서를 랜덤화 시켜서 배열 중 하나를 고르게 시키면 어떨까
  //   return arr[Math.floor(Math.random() * arr.length)];
  // 홀 짝 중에 하나가 랜덤하게 나오는데 그 이유를 아직 잘 모르겠음(보류)
  let oneTwo = Math.floor(Math.random() * 2); // 계속해서 랜덤한 숫자 1,2중에서 나옴
  const arr = ['홀', '짝'];
  return arr[oneTwo]; // 홀짝으로 랜덤하게 나옴
}

main();
