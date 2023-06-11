import { ChangeEvent, useState } from "react"

type EdittableSpanPropsType = {
    title: string
    onChangeTitle: (newValue: string) => void
  }
  
function EditatableSpan(props: EdittableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState("")

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const activateViewMode = () => {
        setEditMode(false)
        props.onChangeTitle(title)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    return editMode
        ? <input value={title} onChange={onChangeTitleHandler} onBlur={activateViewMode} autoFocus/>
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
}

export default EditatableSpan