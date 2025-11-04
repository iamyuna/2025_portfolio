export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer_wrap">
            <div className="resume_wrap">
                <h3 className="title">View My Resume</h3>
                <a className="pdf_btn" href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">OPEN PDF</a>
            </div>
            <div className="contact_wrap">
                <div className="contact">
                    <strong>CONTACT ME</strong>
                    <ul>
                        <li><a href="mailto:dbsdk95331@naver.com">dbsdk95331@naver.com</a></li>
                        <li><a href="tel:+821087456413">+82 1087456413</a></li>
                    </ul>
                </div>
                {/* <div className="sns">
                    <strong>FOLLOW ME</strong>
                    <ul>
                        <li><a href="">BLOG</a></li>
                        <li><a href="">NOTION</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    </footer>
  );
}
