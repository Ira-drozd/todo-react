import React, {useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const ref = useRef<HTMLInputElement>(null)

    const onSubmitForm = (event: React.FormEvent) => {
        event.preventDefault()
       // console.log(ref.current!.value)
         props.onAdd(ref.current!.value)
         ref.current!.value = ''
    }

    return (
        <div className="input-filed mt2">
            <form onSubmit={onSubmitForm}>
                <label htmlFor="title" className="active">Введите название дела</label>
                <input
                    ref={ref}
                    // value={title}
                    // onChange={changeHandler}
                    type="text"
                    id="title"/>
            </form>

        </div>
    )
}