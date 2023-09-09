const firstStage = async (req, res) => {
  try {
    const { slack_name, track } = req.query;

    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date();
    let day = weekdays[d.getDay()];
    let utc_time = d.toISOString().split(".")[0] + "Z";

    if (slack_name === "adewunmi" && track === "backend") {
      const response = {
        slack_name: slack_name,
        current_day: day,
        utc_time: utc_time,
        track: track,
        github_file_url:
          "https://github.com/abuhanaan/hngx-stageOne/blob/main/src/index.js",
        github_repo_url: "https://github.com/abuhanaan/hngx-stageOne",
        status_code: 200,
      };

      return res.status(200).send(response);
    } else {
      return res.status(404).send("User record not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = firstStage;
