import Steps from './components/Steps';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>Домашнее задание «Формы»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task2'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>Учёт тренировок</h3>
          </header>
          <div className={'task__body task__body_task2'}>
            <Steps />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
