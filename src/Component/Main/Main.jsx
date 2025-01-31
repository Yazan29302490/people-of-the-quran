import audioFile from '../../assets/ElevenLabs_2025-01-31T00_09_21_Brian_pre_s50_sb75_se0_b_m2.mp3';

function Main() {
  const playAudio = () => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  return (
    <main>
      <div className="background">
          <div className="glow g-1"></div>
          <div className="glow g-2"></div>
          <div className="glow g-3"></div>
        </div>
      <div className="box-int">
        <h1>مرحبا بكم في موقع <span>اهل القران</span></h1>
        <p>موقع <span>اهل القران</span> موقع يحتوي على اءيات قرءانية و على احاديث شريفة و قصص الانبياء وفيديوهات اسلامية</p>
        <p>تنبية: الموقع قيد التطوير</p>
        <button className="hvr-float-shadow" onClick={playAudio}></button>
      </div>
      <div className="cube-container">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
    </main>
  )
}

export default Main;