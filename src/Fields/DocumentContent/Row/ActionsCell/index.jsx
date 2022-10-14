import ButtonsMode from './ButtonsMode';
import SpeedDialMode from './SpeedDialMode';

const ActionsCell = (props) => {
  const { editing, setEditing, type, text, id, handleChange, showDelete, showSwitchType, showClickSort, handleClickSort, first, last, showHideContent, open, setOpen, modalFullScreen, controllMode } = props;
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
      open={open}
      setOpen={setOpen}
      showHideContent={showHideContent}
      modalFullScreen={modalFullScreen}
    />
  );
};

export default ActionsCell;
