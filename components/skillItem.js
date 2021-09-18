import Image from "next/image";

export default function SkillItem({ icon, name }) {
  return (
    <div>
      <Image src={icon} alt="" width={40} height={40} title={name} />
      <div style={{ fontSize: "11px", fontWeight: "bold" }}>{name}</div>
    </div>
  );
}
