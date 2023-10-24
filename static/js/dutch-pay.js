document.getElementById('calculator-btn').addEventListener('click', () => {
  let mainFood = parseInt(document.getElementById('main-food').value);
  let totalPeople = parseInt(document.getElementById('total-people').value);
  let alcoholPeople = parseInt(document.getElementById('alcohol-people').value);
  let alcoholCost = parseInt(document.getElementById('alcohol-cost').value);
  let drinkPeople = parseInt(document.getElementById('drink-people').value);
  let drinkCost = parseInt(document.getElementById('drink-cost').value);

  if (mainFood < 0 || totalPeople < 0 || alcoholPeople < 0 || alcoholCost < 0 || drinkPeople < 0 || drinkCost < 0) {
    alert('음수 값을 입력할 수 없습니다.');
    return;
  }

  let mainCost = mainFood / totalPeople;
  let alcoholShare = alcoholCost / alcoholPeople;
  let drinkShare = drinkCost / drinkPeople;

  let mainAlcohol = mainCost + alcoholShare;
  let mainDrink = mainCost + drinkShare;

  let resultText = `
  각각 부담할 금액 :
  - 술 마신 사람 : ${mainAlcohol} 원
  - 음료 마신 사람 : ${mainDrink} 원`;

  let newWindow = window.open();
  newWindow.document.write(
    `
    <!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root">
      <div>
        <pre>
        ${resultText}
        </pre>
      </div>
      <form id="result">
        <label for="bank-select">은행 선택:</label>
        <select id="bank-select">
          <option value="KB국민은행">KB국민은행</option>
          <option value="우리은행">우리은행</option>
          <option value="신한은행">신한은행</option></select
        ><br />

        <label for="account-number">은행 계좌:</label>
        <input type="text" id="account-number" placeholder="은행 계좌 입력" /><br />

        <input type="button" id="send-kakao-btn" value="전송">
      </form>
    </div>
  </body>
</html>
    `
  );
});
