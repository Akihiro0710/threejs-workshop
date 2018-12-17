import Page00 from './00_empty';
import Page01 from './01_rendering';
import Page02 from './02_animation';
import Page03 from './03_interaction';

// ドキュメントを読み込んだらページごとの処理を実行
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/')[1];
  console.log(path);

  if(path === '00_empty')            new Page00();
  else if(path === '01_rendering')   new Page01();
  else if(path === '02_animation')   new Page02();
  else if(path === '03_interaction') new Page03();
});
