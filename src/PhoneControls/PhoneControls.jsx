function PhoneControls({ mobile = true }) {
  const handleControllersDown = (e) => {
    e.preventDefault();
    const controllerId = e.currentTarget.id;
    const event = new CustomEvent("controllerDown", {
      detail: { action: controllerId },
    });
    console.log(event.detail.action);
    window.dispatchEvent(event);
  };

  const handleControllersUp = (e) => {
    e.preventDefault();
    const controllerId = e.currentTarget.id;
    const event = new CustomEvent("controllerUp", {
      detail: { action: controllerId },
    });
    window.dispatchEvent(event);
  };
  return !mobile ? null : (
    <div
      id="controls"
      style={{
        zIndex: 1,
        color: "white",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: "90%",
        left: "50%",
        gap: "8px",
        transform: "translate(-50%, -50%)",
      }}
    >
      <button
        id="ArrowUp"
        style={{
          fontSize: "25px",
          padding: "5px 10px",
          backgroundColor: "#676767",
          opacity: "90%",
          color: "white",
          outline: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
          WebkitTouchCallout: "none",
          touchAction: "manipulation",
          WebkitTapHighlightColor: "transparent",
        }}
        onTouchStart={handleControllersDown}
        onTouchEnd={handleControllersUp}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
      <div id="downleftright" style={{ display: "flex", gap: "5px" }}>
        <button
          id="ArrowLeft"
          style={{
            fontSize: "25px",
            padding: "5px 10px",
            backgroundColor: "#676767",
            opacity: "90%",
            color: "white",
            outline: "none",
            WebkitUserSelect: "none",
            userSelect: "none",
            WebkitTouchCallout: "none",
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
          onTouchStart={handleControllersDown}
          onTouchEnd={handleControllersUp}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          id="ArrowDown"
          style={{
            fontSize: "25px",
            padding: "5px 10px",
            backgroundColor: "#676767",
            opacity: "90%",
            color: "white",
            outline: "none",
            WebkitUserSelect: "none",
            userSelect: "none",
            WebkitTouchCallout: "none",
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
          onTouchStart={handleControllersDown}
          onTouchEnd={handleControllersUp}
        >
          <i className="fa-solid fa-arrow-down"></i>
        </button>
        <button
          id="ArrowRight"
          style={{
            fontSize: "25px",
            padding: "5px 10px",
            backgroundColor: "#676767",
            opacity: "90%",
            color: "white",
            outline: "none",
            WebkitUserSelect: "none",
            userSelect: "none",
            WebkitTouchCallout: "none",
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
          onTouchStart={handleControllersDown}
          onTouchEnd={handleControllersUp}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default PhoneControls;
