import styles from './blogpost.module.css'
type BlogPostProps = {
    title: string
    children: React.ReactNode
}

const BlogPost: React.FC<BlogPostProps> = ({ title, children }) => {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default BlogPost