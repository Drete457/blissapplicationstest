import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pinsState } from '../Components/redux/storeReducer';
import { deletePin } from '../Components/redux/actions';
import DefaultPage from '../Components/view/DefaultPage';
import DisplayPins from '../Components/displayPins';
import randomKey from '../Components/random/randomKey';
import Button from '../Components/buttons/button';

export default function Saved() {
  const pinsArray = useSelector<pinsState, pinsState["pins"]>((state) => state.pins);

  const dispatch = useDispatch();
  const deletePins = (pins: object) => {
    dispatch(deletePin(pins));
  };

  return (
    <>
      <DefaultPage>
        {pinsArray.length === 0 && <h1>There isn't any saved pin list</h1>}
        {pinsArray.length > 0 && pinsArray.map((pins: any) => {
          return (
            <div key={randomKey()}>
            <p><DisplayPins numberToDisplay={pins} />
            <Button className="buttondelete" onClick={() => {deletePins(pins)}}>DELETE</Button>
            </p>
          </div>
          )
        })}
      </DefaultPage>
    </>
  );
};