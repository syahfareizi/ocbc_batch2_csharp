﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace New_TodoApp.Configuration
{
    public class AuthResult
    {
        public string Token { get; set; }
        public bool Success { get; set; }
        public List<string> Errors { get; set; }
    }
}
