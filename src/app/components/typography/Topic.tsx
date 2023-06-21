interface IChildren {
    children: JSX.Element | JSX.Element[]
}

const Topic = ({ children }: IChildren) => {
    return <div className="my-4">
        {children}
    </div>
}

export default Topic