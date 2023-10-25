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

  let mainAlcoholRound = Math.round(mainAlcohol / 10) * 10;
  let mainDrinkRound = Math.round(mainDrink / 10) * 10;

  let resultText = `
  각각 부담할 금액 :
  - 술 마신 사람 : ${mainAlcoholRound} 원
  - 음료 마신 사람 : ${mainDrinkRound} 원`;

  let newWindow = window.open();
  newWindow.document.write(
    `
    <!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/static/css/resultStyle.css">
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
          <option value="기업은행">기업은행</option>
          <option value="농협은행">농협은행</option>
          <option value="산업은행">산업은행</option>
          <option value="수협은행">수협은행</option>
          <option value="신한은행">신한은행</option>
          <option value="우리은행">우리은행</option>
          <option value="우체국">우체국</option>
          <option value="하나은행">하나은행</option>
          <option value="한국씨티">한국씨티</option>
          <option value="SC제일">SC제일</option>
          <option value="카카오뱅크">카카오뱅크</option>
          <option value="케이뱅크">케이뱅크</option>
          <option value="토스뱅크">토스뱅크</option>
          <option value="경남은행">경남은행</option>
          <option value="광주은행">광주은행</option>
          <option value="대구은행">대구은행</option>
          <option value="부산은행">부산은행</option>
          <option value="전북은행">전북은행</option>
          <option value="제주은행">제주은행</option>
          <option value="저축은행">저축은행</option>
          <option value="산림조합은행">산림조합은행</option>
          <option value="새마을은행">새마을은행</option>
          <option value="신협은행">신협은행</option>
          <option value="도이치은행">도이치은행</option>
          <option value="뱅크오브아메리카">뱅크오브아메리카</option>
          <option value="중국건설">중국건설</option>
          <option value="중국공상">중국공상</option>
          <option value="중국">중국</option>
          <option value="HSBC은행">HSBC은행</option>
          <option value="BNP파리바">BNP파리바</option>
          <option value="JP모간체이스">JP모간체이스</option>
          </select><br />

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
