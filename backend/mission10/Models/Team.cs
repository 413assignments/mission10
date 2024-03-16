using System.ComponentModel.DataAnnotations;

namespace mission10.Models
{
    public class Team
    {
        [Key]
        [Required]
        public int TeamID { get; set; }
        
        [Required]
        [MaxLength(50)]
        public string TeamName { get; set; }

        public int? CaptainID { get; set; }
    }
}
