/*
 * อย่าลืมเปลี่ยน fullName และ studentId ให้เป็นของตัวเอง
 */
interface Props{
  year: string,
  fullName: string,
  studentId: string
}
export default function Footer({year, fullName, studentId}:Props) {
  return (
    <footer className="text-center w-100">
      <p className="text-white bg-secondary p-4 m-0">Copyright © {year} {fullName} {studentId}</p>
    </footer>
    // <footer className="text-center w-100">
    //         <p className="text-white bg-secondary p-4 m-0">
    //           Copyright © 2026 chanadda thanyaratthanon 6706200999
    //         </p>
    //       </footer>
  );
}
