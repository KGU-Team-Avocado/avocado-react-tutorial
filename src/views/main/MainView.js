function MainView() {
    return(
        <main>
        <h1>Avocado React Tutorial : ART</h1>
        <p class="fs-5 col-md-8">아보카도 리액트 튜토리얼</p>
    
        <div class="mb-5">
          <a href="https://github.com/KGU-Team-Avocado/avocado-react-tutorial.git" class="btn btn-primary btn-lg px-4">GitHub에서 소스코드 보기</a>
        </div>
    
        <hr class="col-3 col-md-2 mb-5"/>
    
        <div class="row g-5">
          <div class="col-md-8">
            <h2>각자 페이지에서 연습하기</h2>
            <p>필요한 사람은 아래 개인 페이지에서 실습하세요 (학번순)</p>
            <ul class="icon-list">
              <li><a href="user/gabrielyoon7">윤주현</a></li>
              <li><a href="user/aaa">남진수</a></li>
              <li><a href="user/aaa">함현준</a></li>
              <li><a href="user/aaa">김가영</a></li>
              <li><a href="user/aaa">박소영</a></li>
              <li><a href="user/aaa">김도희</a></li>
              <li><a href="user/aaa">김세은</a></li>
              <li><a href="user/aaa">김연수</a></li>
            </ul>

          </div>
    
          <div class="col-md-4">
            <h2>사용 가이드</h2>
            <p>사용방법에 대해서 알아보세요.</p>
            <ul class="icon-list">
              <li><a href="#">Quick start</a></li>
            </ul>
          </div>
        </div>
      </main>
    )
}
export default MainView;