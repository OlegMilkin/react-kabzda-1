import React, {useState} from "react";

const ProfileStatusHook = (props) => {

    let [isEditMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    const enableEditMode = () => {
      setEditMode(true)
    }

    const disableEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
    }

    const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
    }

    return (
      <>
        {
          isEditMode
            ? <input
              autoFocus={true}
              onBlur={ disableEditMode }
              type="text"
              value={status}
              onChange={onStatusChange}
            />
            : <div
              onDoubleClick={ enableEditMode }
            >
              {status || '-----'}
          </div>
        }
      </>
    )
}

export default ProfileStatusHook