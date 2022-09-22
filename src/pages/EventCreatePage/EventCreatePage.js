import React from "react";
import { useHistory } from "react-router-dom";
import { useEvent } from "../../context";
import "./style.scss";

const EventCreatePage = () => {
  const history = useHistory();
  const { setEvents, events, setEvent } = useEvent();
  const [form, setForm] = React.useState({
    name: "",
    host: "",
    start: "",
    end: "",
    location: "",
    photo: "",
  });
  const onChangeHandler = (e, type) => {
    setForm({
      ...form,
      [type]: e.target.value,
    });
  };
  const onNext = () => {
    setEvents([...events, form]);
    setEvent(form);
    history.push('/event')
  };
  return (
    <main className="eventcreate-main">
      <label>
        Even Name:
        <input
          id="name"
          type="text"
          onChange={(e) => onChangeHandler(e, "name")}
          value={form.name}
        />
      </label>
      <label>
        Host Name:
        <input
          type="text"
          onChange={(e) => onChangeHandler(e, "host")}
          value={form.host}
        />
      </label>
      <label>
        Start time:
        <input
          type="text"
          onChange={(e) => onChangeHandler(e, "start")}
          value={form.start}
        />
      </label>
      <label>
        End time:
        <input
          type="text"
          onChange={(e) => onChangeHandler(e, "end")}
          value={form.end}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          onChange={(e) => onChangeHandler(e, "location")}
          value={form.location}
        />
      </label>
      <label>
        Photo:
        <input
          type="file"
          onChange={(e) => onChangeHandler(e, "photo")}
          value={form.photo}
        />
      </label>
      <button
        type="button"
        className="eventcreate-next__button"
        onClick={onNext}
      >
        🎉 Next
      </button>
    </main>
  );
};

export default EventCreatePage;
