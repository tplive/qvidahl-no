// Copyright 2021 The Authors. Subject to the MIT license.
import Image from "next/image";
import Link from "next/link";

import styles from "./blogpost.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Thomas Qvidahl";

type BlogPostProps = {
  title: string;
  home: boolean;
  children: React.ReactNode;
};

const BlogPost: React.FC<BlogPostProps> = ({ title, home, children }) => {
  return (
    <>
      {home ? (
        <div className={styles.container}>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{title}</h1>
        </div>
      ) : (
        <div>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/blog">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </div>
      )}
    </>
  );
};

export default BlogPost;
