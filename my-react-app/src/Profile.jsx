function Profile(){
  const name = "Ngô Khắc Hoàn";
  const studentId = "PH61386";
  const major = "Lập trình web";

  return(
    <div className="profile-card">
        <h2>Thông tin sinh viên</h2>
      <p>
       <strong>Họ Tên :</strong>{name}
      </p>
      <p>
        <strong>Mã sinh viên:</strong>{studentId}
      </p>
      <p><strong>Môn học :</strong>{major}
      </p>
      
    </div>
  );
}
