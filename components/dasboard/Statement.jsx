import Invoice from "../Invoice";

export default function Statement() {
  return (
    <>
      <div className="dashboard__content_content">
        <h1 className="text-30">Statement of Accounts</h1>
        {/* <p className="">Lorem ipsum dolor sit amet, consectetur.</p> */}
        <Invoice />
      </div>
    </>
  );
}
