import ButtonsMode from './ButtonsMode';
import SpeedDialMode from './SpeedDialMode';

const ActionsCell = (props) => {
  const { editing, setEditing, type, text, id, handleChange, showDelete, showSwitchType, showClickSort, handleClickSort, first, last, showHideContent,
    showDetail, setShowDetail,
    modalFullScreen, controllMode,
  } = props;
  if (controllMode === 'speedDial') {
    return (
      <SpeedDialMode
      />
    );
  }
  return (
    <ButtonsMode
      editing={editing}
      setEditing={setEditing}
      type={type}
      text={text}
      id={id}
      handleChange={handleChange}
      showDelete={showDelete}
      showSwitchType={showSwitchType}
      showClickSort={showClickSort}
      handleClickSort={handleClickSort}
      first={first}
      last={last}
      showDetail={showDetail}
      setShowDetail={setShowDetail}
      showHideContent={showHideContent}
      modalFullScreen={modalFullScreen}
    />
  );
};

export default ActionsCell;
