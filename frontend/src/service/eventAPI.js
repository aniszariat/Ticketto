import axios from "axios";

const url = "http://localhost:4000/"; //port backend

/**
 * Get liste of events
 * @returns
 */
export async function getEvents() {
  try {
    const userId = localStorage.getItem("userId");
    const response = await axios.get(url + "events/", {
      headers: { userId: userId },
    });
    return response;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      return error.response;
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    return error;
  }
}

export async function addEvent(events) {
  try {
    const formData = new FormData();
    formData.append("EventCreator", events.EventCreator);
    formData.append("Title", events.Title);
    formData.append("DateEvent", events.Date);
    formData.append("AdresseEvent", events.Location);
    formData.append("CategoryEvent", events.Category);
    formData.append("Duration", events.Duration);
    formData.append("Description", events.Description);
    formData.append("PosterEvent", events.image);

    const response = await axios.post(url + "events/", formData, {
      IsEssential: true,
    });
    return response;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      return error.response;
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    return error;
  }
}

export async function getEventById(id) {
  try {
    const response = await axios.get(url + "events/" + id, {
      IsEssential: true,
    });
    return response;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      return error.response;
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    return error;
  }
}
