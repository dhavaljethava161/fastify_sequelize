export default (data, req, res, msg, show = true) => {
  switch (req.method) {
    case "GET":
      if (
        data != null &&
        (Array.isArray(data).length > 0 || Object.keys(data).length > 0)
      )
        res.code(200).send({
          success: true,
          message: msg ? msg : routeName + "s found",
          data: data,
          show,
        });
      else
        res.code(400).send({
          success: false,
          message: msg ? msg : routeName + " not found",
          data: null,
          show,
        });
      break;
    case "PUT":
      if (Array.isArray(data) && data[0])
        res.code(200).send({
          success: true,
          message: msg ? msg : routeName + " has been updated.",
          data: data[0],
          show,
        });
      else
        res.code(400).send({
          success: false,
          message: msg ? msg : routeName + " not found",
          data: null,
          show,
        });
      break;
    case "POST":
      if (data || Array.isArray(data))
        res.code(201).send({
          success: true,
          message: msg ? msg : routeName + " has been added",
          data: data,
          show,
        });
      else
        res.code(200).send({
          success: false,
          message: msg
            ? msg
            : "some error when create " + routeName.toLowerCase(),
          data: null,
          show,
        });
      break;
    case "DELETE":
      if (data)
        res.code(200).send({
          success: true,
          message: msg ? msg : routeName + " has been deleted",
          data: data ? data : routeName + " delete successfully",
          show,
        });
      else
        res.code(200).send({
          success: false,
          message: msg ? msg : routeName + " not found",
          data: null,
          show,
        });
      break;
    default:
      res.code(200).send({
        success: false,
        message: "Something want wrong",
        data: null,
        show,
      });
      break;
  }
};
