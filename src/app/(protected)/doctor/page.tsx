import { checkRole, getRole } from "@/utils/roles";
import { redirect } from "next/navigation";

export default async function DoctorDashboard() {
  // Protect the page from users who are not admins
  const isDoctor = await checkRole("DOCTOR");
  const role = await getRole();
  if (!isDoctor) {
    redirect(`/${role}`);
  }
  return <div></div>;
}
