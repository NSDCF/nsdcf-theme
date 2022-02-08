+++
title       = "{{ replace .Name "-" " " | title }}"
date        = {{ .Date }}
description = ""
draft       = true
categories  = [""]
tags        = ["", ""]

[[resources]]
  src  = "*.jpg"
  name = "img-:counter"
+++
