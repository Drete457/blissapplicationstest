import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pinsState } from '../Components/redux/storeReducer';
import { deletePin } from '../Components/redux/actions';
import DefaultPage from '../Components/view/DefaultPage';
import DisplayPins from '../Components/displayPins';
import Button from '../Components/buttons/button';

export default function Saved() {
  const pinsArray = useSelector<pinsState, pinsState["pins"]>((state) => state.pins);

  const dispatch = useDispatch();
  const deletePins = (pins: object) => {
    dispatch(deletePin(pins));
  };

  const display = pinsArray.map(( pins: any, index: number ) => {
    return (
      <div key={index}>
        <p key={index}><DisplayPins numberToDisplay={pins} />
      <Button className="buttondelete" onClick={() => {deletePins(pins)}}>DELETE</Button>
      </p>
    </div>
    )
  })

  return (
    <>
      <DefaultPage>
        {pinsArray.length === 0 && <h1>There isn't any saved pin list</h1>}
        {pinsArray.length > 0 && display}
      </DefaultPage>
    </>
  );
};